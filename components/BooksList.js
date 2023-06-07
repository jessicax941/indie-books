import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const BooksList = ({ header, children }) => {
  return (
    <View className="px-4">
      <Text className="text-2xl pb-2">{header}</Text>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
        }}
        horizontal
        showsHorizontalScrollIndicator={true}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default BooksList;
