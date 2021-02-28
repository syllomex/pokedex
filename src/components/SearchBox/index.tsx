import React, { useState } from 'react';
import colors from '../../assets/colors';

import {
  Container, Search, CancelButton, CancelIcon,
} from './styles';

type Props = {
  handleSearch: () => void;
  handleChangeText: (text: string) => void;
  cancelButtonShown?: boolean;
  onPressCancel: () => void;
};

const SearchBox: React.FC<Props> = ({
  handleSearch,
  handleChangeText,
  cancelButtonShown,
  onPressCancel,
}) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Search
        placeholder="Buscar"
        selectionColor={colors.gray}
        onSubmitEditing={handleSearch}
        value={value}
        onChangeText={(text: string) => {
          setValue(text);
          handleChangeText(text);
        }}
      />
      {cancelButtonShown && (
        <CancelButton
          onPress={() => {
            onPressCancel();
            setValue('');
          }}
        >
          <CancelIcon />
        </CancelButton>
      )}
    </Container>
  );
};

export default SearchBox;
