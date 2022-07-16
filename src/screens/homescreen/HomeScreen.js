import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {homeItems} from '../../redux/actions';

const HomeScreen = props => {
  const [cat, setCat] = useState(0);
  const [catLabel, setCatLabel] = useState('');

  useEffect(() => {
    props.homeItems();
  }, []);

  const productListing = () => {
    //show all products by default
    if (cat == 0) {
      return props.homecomponents.homecomponents.productitems;
    }
    let itemArr = props.homecomponents.homecomponents.productitems;
    let filterItems = [];
    //logic for filtering products
    itemArr.map(items => {
      if (items.category_id == cat) {
        filterItems.push(items);
      }
    });
    return filterItems;
  };

  renderHeader = () => (
    <>
      <View style={styles.header}>
        <TextInput
          style={styles.search}
          onChangeText={() => console.log(' filter the list')}
          // value={state.text}
          placeholder="Search...."
        />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={props.homecomponents.homecomponents.category}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                style={styles.category}
                onPress={() => {
                  setCat(item.id);
                  setCatLabel(item.name);
                }}>
                <Image
                  source={{uri: item.image.url}}
                  style={{height: 36, width: 48}}
                />
              </TouchableOpacity>
              <Text style={styles.productLable}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
      <View>
        <Text style={styles.categoryHeader}>{catLabel}</Text>
      </View>
    </>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productListing()}
        renderItem={({item}) => (
          <View style={styles.categoryView}>
            <Image
              source={{uri: item.image.url}}
              style={{height: 36, width: 48}}
            />
            <Text style={styles.paragraph}>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        keyExtractor={(item, index) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: 180,
    padding: 5,
    backgroundColor: '#3a6dc7',
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 1,
  },
  search: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  category: {
    width: 60,
    height: 60,
    backgroundColor: 'orange',
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryView: {
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },

  productLable: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
    width: 72,
    color: 'white',
  },
  categoryHeader: {
    marginTop: 5,
    marginLeft: 150,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return {
    homecomponents: state.homeItems,
  };
};
const mapDispatchToProps = {
  homeItems,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
