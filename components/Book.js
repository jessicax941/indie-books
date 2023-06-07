import React from 'react';
import { Image, View } from 'react-native';

const Book = ({ imgUrl }) => {
  return (
    <View className="">
      <Image
        className="w-36 h-44"
        resizeMode="contain"
        source={{
          uri: imgUrl,
        }}
      ></Image>
    </View>
  );
};

export default Book;
