import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.profileImage}
          />
          <Ionicons
            name="checkmark"
            size={48}
            color="#00e600"
            style={styles.check}
          />
        </View>
      </View>

      <View style={styles.divider} />

      {/* Details */}
      <View style={styles.content}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Ravindu Gunarathne</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={22} color="#000" />
          <Text style={[styles.value, styles.rowText]}>adrsgunarathne@students.nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={22} color="#000" />
          <Text style={[styles.value, styles.rowText]}>0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    backgroundColor: '#000',
    paddingTop: 40,
    paddingBottom: 12,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: 16,
  },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: '#856c71',
  },
  check: {
    position: 'absolute',
    right: 10,
    bottom: 22,
  },

  divider: {
    height: 2,
    backgroundColor: '#000',
    marginHorizontal: 13,
    marginTop: 8,
  },

  content: {
    padding: 13,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    marginTop: 18,
    marginBottom: 6,
  },
  value: {
    fontSize: 17,
    fontFamily: 'Nunito_400Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 12,
  },
});