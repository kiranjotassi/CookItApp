import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  images,
  pictures,
} from 'C:\\Users\\kiran\\IdeaProjects\\FinalProject2_0\\shared\\Global.js';
import Card from '../shared/Card';

export default function Recipe({navigation}) {
  const rating = navigation.getParam('rating');
  const image = navigation.getParam('key');
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Image style={styles.imageView} source={pictures.displays[image]} />
            <Text style={styles.titleStyle}>{navigation.getParam('title')}</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingStyle}>Cook It! Rating: </Text>
              <Image source={images.ratings[rating]} />
            </View>
            <Text style={styles.descriptionStyle}>
              {' '}
              {navigation.getParam('description')}
            </Text>
            <Text style={styles.subtitle}>Ingredients:</Text>
            <Text style={styles.ingredientStyle}>
              {' '}
              {navigation.getParam('ingredients')}
            </Text>
            <Text style={styles.subtitle}>Steps:</Text>
            <Text style={styles.steps}>{navigation.getParam('steps')}</Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  imageView: {
    justifyContent: 'center',
    width: 320,
    height: 200,
  },
  titleStyle: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  ratingStyle: {
    marginTop: 5,
    fontSize: 20,
    marginBottom: 20,
  },
  descriptionStyle: {
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 20,
  },
  ingredientStyle:{
    fontSize: 16,
  },
  subtitle: {
    color: 'maroon',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  steps: {
    fontSize: 16,
  },
});
