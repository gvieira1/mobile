import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { getPokemons, getPokemonDetails } from '../services/api';
import { Pokemon } from '../types/Pokemon';
import { PokemonCard } from '../components/PokemonCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const PokedexScreen = () => {
  const insets = useSafeAreaInsets();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [offset, setOffset] = useState(0);

  const LIMIT = 100;

  useEffect(() => {
    loadInitialPokemons();
  }, []);

   const loadInitialPokemons = async () => {
    try {
      setIsLoading(true);
      const list = await getPokemons(LIMIT, 0);
      const details = await Promise.all(list.map(p => getPokemonDetails(p.url)));
      setPokemons(details);
      setOffset(LIMIT);
      setError('');
    } catch (err) {
      setError('Falha ao carregar Pokémons. Verifique sua conexão.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMorePokemons = async () => {
    if (isFetchingMore || isLoading || error.length > 0) return;

    try {
      setIsFetchingMore(true);
      const list = await getPokemons(LIMIT, offset);
      const details = await Promise.all(list.map(p => getPokemonDetails(p.url)));
      setPokemons(prev => [...prev, ...details]);
      setOffset(prev => prev + LIMIT);
    } catch (err) {
      console.error('Erro ao carregar mais Pokémons:', err);
    } finally {
      setIsFetchingMore(false);
    }
  };

  const filtered = pokemons.filter(p => p.name.includes(search.toLowerCase()));

  const renderEmptyList = () => {
    if (isLoading || error) return null;

    if (search.trim().length > 0 && filtered.length === 0) {
      return (
        <Text style={styles.empty}>
          Nenhum Pokémon encontrado para '{search}'
        </Text>
      );
    }

    if (pokemons.length === 0) {
      return (
        <Text style={styles.empty}>
          Nenhum Pokémon para exibir no momento.
        </Text>
      );
    }
    return null;
  };

  const renderFooter = () => {
    if (!isFetchingMore) return null;
    return <ActivityIndicator size="small" color="#888" style={{ marginVertical: 10 }} />;
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Pokédex</Text>
      <TextInput
        placeholder="Buscar pokémon..."
        style={styles.input}
        onChangeText={setSearch}
      />

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {!isLoading && !error && (
        <FlatList
          data={search.trim() ? filtered : pokemons}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
             columnWrapperStyle={{
              justifyContent: 'space-between', 
              paddingHorizontal: 20, 
            }}
           contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}

          ListEmptyComponent={renderEmptyList}
          ListFooterComponent={renderFooter}
          onEndReached={search.trim() ? undefined : loadMorePokemons}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
},
   error: {
    color: 'red',
    marginVertical: 10,
    textAlign: 'center',
},
    empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
     color: '#666',
},

});
