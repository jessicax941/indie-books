import React from 'react';
import { Image, View } from 'react-native';

const Book = ({ imgUrl }) => {
  return (
    <View className="px-3">
      <Image
        className="w-28 h-44 rounded"
        resizeMode="cover"
        source={{
          uri: imgUrl,
        }}
      ></Image>
    </View>
  );
};

export default Book;
