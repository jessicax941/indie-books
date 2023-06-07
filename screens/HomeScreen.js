import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import Book from '../components/Book';
import BooksList from '../components/BooksList';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-orange-50">
      {/* Header */}
      <View className="items-center py-4">
        <Text className="text-gray-900 text-2xl font-serif">Indie Books</Text>
        {/* Search */}
        <View className="flex-row items-center bg-gray-50 rounded-full py-2 px-3 my-2 w-2/3">
          <Icons.MagnifyingGlassIcon className="text-gray-500" />
          <TextInput
            className="px-1 my-1 text-base align-middle font-sans"
            placeholder="Search for books"
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView>
        <BooksList header="New & Trending" subheader="What others are reading">
          <Book
            name="The Last Thing He Told Me"
            imgUrl={
              'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603034599l/54981009.jpg'
            }
          />
          <Book
            name="The Last Thing He Told Me"
            imgUrl={'https://covers.openlibrary.org/b/isbn/9781786331526-M.jpg'}
          />
          <Book
            name="The Last Thing He Told Me"
            imgUrl={
              'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603034599l/54981009.jpg'
            }
          />
          <Book
            name="The Last Thing He Told Me"
            imgUrl={
              'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603034599l/54981009.jpg'
            }
          />
        </BooksList>
        <BooksList
          header="For You"
          subheader="Recommended based on your recent reads"
        >
          <Book
            name="The Last Thing He Told Me"
            imgUrl={
              'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603034599l/54981009.jpg'
            }
          />
          <Book
            name="The Last Thing He Told Me"
            imgUrl={'https://covers.openlibrary.org/b/isbn/9781786331526-M.jpg'}
          />
        </BooksList>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
