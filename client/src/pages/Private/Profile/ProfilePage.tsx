import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../../redux/profileActions';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, Button } from '@mui/material';
import { AppDispatch} from '../../../redux';
import { RootState } from '../../../redux/indexReducer';

import './index.css'

const Profile: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);

  const handleChange = (field: string, value: any) => {
    (dispatch as any)(updateField( field, value ));
  };

  const handleAdvancedLogic = () => {
    if (!formState.hasPatronymic) {
      handleChange('patronymic', '');
    }
    if (formState.hasChildren) {
      handleChange('childrenCount', formState.childrenCount || 1);
    }
  };

  useEffect(() => {
    handleAdvancedLogic();
  }, [formState.hasPatronymic, formState.hasChildren]);

  useEffect(()=>{
    
    const formStatesJson = localStorage.getItem('formState')
    
    if (formStatesJson) {
      const formStates = JSON.parse(formStatesJson)
      console.log(formStates);

      for (const [field, value] of Object.entries(formStates)) {
        handleChange(field, value);
        console.log(field, value);
      }

    }

  },[])

  function saveForms() {
    localStorage.setItem('formState', JSON.stringify(formState))
    alert('Данные успешно сохранены')
  }


  return (
    <>
    <form className='profile_form'>

      <TextField variant="standard"
        label="Имя"
        type="text"
        value={formState.firstName || ''}
        onChange={(e) => handleChange('firstName', e.target.value)}
      />
      <TextField variant="standard"
        label="Фамилия"
        type="text"
        value={formState.lastName || ''}
        onChange={(e) => handleChange('lastName', e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formState.hasPatronymic || false}
            onChange={(e) => handleChange('hasPatronymic', e.target.checked)}
          />
        }
        label="Есть ли отчество?"
      />
      <TextField variant="standard"
        label="Отчество"
        type="text"
        value={formState.patronymic || ''}
        onChange={(e) => handleChange('patronymic', e.target.value)}
        disabled={!formState.hasPatronymic}
      />
      <TextField variant="standard"
        label="Дата рождения"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formState.birthDate || ''}
        onChange={(e) => handleChange('birthDate', e.target.value)}
      />
      <FormControl variant="standard">
        <InputLabel>Пол</InputLabel>
        <Select
          value={formState.gender || ''}
          onChange={(e) => handleChange('gender', e.target.value)}
        >
          <MenuItem value="male">Мужской</MenuItem>
          <MenuItem value="female">Женский</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={formState.checkboxGroup || false}
            onChange={(e) => handleChange('checkboxGroup', e.target.checked)}
          />
        }
        label="Женаты/замужем?"
      />
      <RadioGroup
        value={formState.radioGroup || ''}
        onChange={(e) => handleChange('radioGroup', e.target.value)} sx={{margin:'0 -12px'}}
      >
        <FormControlLabel value="option1" control={<Radio />} label="Учу сейчас английский" sx={{margin: '-8px'}}/>
        <FormControlLabel value="option2" control={<Radio />} label="Не учу сейчас английский" sx={{margin: '-8px'}}/>
      </RadioGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={formState.hasChildren || false}
            onChange={(e) => handleChange('hasChildren', e.target.checked)}
          />
        }
        label="Есть ли дети"
      />
      {formState.hasChildren && (
        <TextField variant="standard"
          label="Количество детей"
          type="number"
          value={formState.childrenCount || ''}
          onChange={(e) => handleChange('childrenCount', e.target.value)}
        />
      )}
       <FormControl variant="standard">
        <InputLabel >Уровень английского</InputLabel>
        <Select
          value={formState.eng || ''}
          onChange={(e) => handleChange('eng', e.target.value)}
        >
          <MenuItem value="A1">A1</MenuItem>
          <MenuItem value="A2">A2</MenuItem>
          <MenuItem value="B1">B1</MenuItem>
          <MenuItem value="B2">B2</MenuItem>
          <MenuItem value="C1">C1</MenuItem>
          <MenuItem value="C2">C2</MenuItem>
        </Select>
      </FormControl>
      <TextField variant="standard"
          label="Сколько лет опыта английским?"
          type="number"
          value={formState.engYears || ''}
          onChange={(e) => handleChange('engYears', e.target.value)}
        />
      <FormControl variant="standard">
        <InputLabel>Хотели бы учить язык здесь?</InputLabel>
        <Select
          value={formState.want || ''}
          onChange={(e) => handleChange('want', e.target.value)}
        >
          <MenuItem value="yes">Да</MenuItem>
          <MenuItem value="no">Нет</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Учились ли вы с подобным приложением?</InputLabel>
        <Select
          value={formState.study || ''}
          onChange={(e) => handleChange('study', e.target.value)}
        >
          <MenuItem value="yes">Да</MenuItem>
          <MenuItem value="no">Нет</MenuItem>
        </Select>
      </FormControl> 
      <FormControl variant="standard" >
        <InputLabel >Желаемый уровень английского</InputLabel>
        <Select
          value={formState.englevel || ''}
          onChange={(e) => handleChange('englevel', e.target.value)}
        >
          <MenuItem value="A1">A1</MenuItem>
          <MenuItem value="A2">A2</MenuItem>
          <MenuItem value="B1">B1</MenuItem>
          <MenuItem value="B2">B2</MenuItem>
          <MenuItem value="C1">C1</MenuItem>
          <MenuItem value="C2">C2</MenuItem>
        </Select>
      </FormControl>   
      <TextField variant="standard"
        label="Слово описывающее вас"
        type="text"
        value={formState.word_discribe || ''}
        onChange={(e) => handleChange('word_discribe', e.target.value)}
      /> 
      <TextField variant="standard"
        label="Страна проживания"
        type="text"
        value={formState.country || ''}
        onChange={(e) => handleChange('country', e.target.value)}
      /> 
       <TextField variant="standard"
        label="Город проживания"
        type="text"
        value={formState.city || ''}
        onChange={(e) => handleChange('city', e.target.value)}
      /> 
      <TextField variant="standard"
        label="Город мечты"
        type="text"
        value={formState.cityDream || ''}
        onChange={(e) => handleChange('cityDream', e.target.value)}
      /> 

    </form>
    <Button onClick={saveForms} variant="outlined" sx={{marginTop:'20px', marginLeft:'50%', color:'black' }}>Сохранить</Button>
    </>
  );
};

export default Profile;


