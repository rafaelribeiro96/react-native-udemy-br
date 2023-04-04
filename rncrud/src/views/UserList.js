import React, {useContext} from 'react';
import {FlatList, StyleSheet, View, Alert} from 'react-native';
import {ListItem, Avatar, Button, Icon} from '@rneui/themed';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDelete(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          icon={<Icon name="edit" size={25} color="orange" />}
          type="clear"
        />
        <Button
          onPress={() => confirmUserDelete(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        onPress={() => props.navigation.navigate('UserForm', user)}
        bottomDivider>
        <Avatar title={user.name} source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexGrow: 0.3,
          }}>
          {getActions(user)}
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
});
