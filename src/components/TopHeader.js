import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const TopHeader = () => {

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content style={styles.appbar} title="Weather Application" subtitle="Select City" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
  },
  appbar: {
    alignItems: "center",
  }
});

export default TopHeader;