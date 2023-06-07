import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const BooksList = ({ header, subheader, children }) => {
  return (
    <View className="px-6 pb-8">
      <Text className="text-3xl pb-1 font-serif">{header}</Text>
      <Text className="text-base pb-3 text-neutral-700">{subheader}</Text>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <View className="h-3 w-full bg-orange-200 rounded-sm shadow-lg shadow-neutral-800/50"></View>
    </View>
  );
};

export default BooksList;
