import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native'
import React, { useRef, useState } from 'react'

const { width } = Dimensions.get('window')

const slides = [
  {
    id: '1',
    title: 'Various Collections Of The Latest Products',
    subtitle:
      'Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.',
    image: 'https://c8.alamy.com/comp/RJMNEB/shopping-store-cartoon-RJMNEB.jpg',
  },
  {
    id: '2',
    title: 'Fast Delivery At Your Doorstep',
    subtitle:
      'Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum.',
    image: 'https://c8.alamy.com/comp/RJMNEB/shopping-store-cartoon-RJMNEB.jpg',
  },
  {
    id: '3',
    title: 'Easy Payment & Secure Checkout',
    subtitle:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
    image: 'https://c8.alamy.com/comp/RJMNEB/shopping-store-cartoon-RJMNEB.jpg',
  },
]

const Welcome1 = ({ navigation }) => {
  const flatListRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const onViewRef = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  })

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
      })
    } else {
      navigation.navigate('SignUp');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Skip */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={i === currentIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === 2 ? 'Create Account' : 'Next'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already Have an Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },

  skipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1c1c1c',
    borderColor:"#5b5bd6",
    borderWidth:1,
    borderRadius:10,
    padding:5,
    paddingHorizontal:20,
  },

  slide: {
    width,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 100,
  },

  imageWrapper: {
    width: '100%',
    height: 360,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 30,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1c1c1c',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: '#9b9b9b',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },

  dots: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#d1d1d1',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 18,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#5b5bd6',
    marginHorizontal: 4,
  },

  button: {
    backgroundColor: '#5b5bd6',
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    
  },

  loginText: {
    color: '#5b5bd6',
    fontSize: 14,
    fontWeight: 'bold',
     marginBottom: 70,
  },
})
