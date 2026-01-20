import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Tiêu đề */}
        <Text style={styles.title}>Đăng nhập</Text>

        {/* Mô tả */}
        <Text style={styles.desc}>
          Nhập số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        {/* Label */}
        <Text style={styles.label}>Nhập số điện thoại</Text>

        {/* Ô nhập */}
        <TextInput
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          style={styles.input}
        />

        {/* Nút (giả, cho đủ UI) */}
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    marginBottom: 6
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#eee',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#999',
    fontSize: 16
  }
});
