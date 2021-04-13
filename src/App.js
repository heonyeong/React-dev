//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'

// 고객정보 배열로 구성
const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/128/128/any',
  'name' : '김헌영1',
  'birthday' : '841225',
  'gender' : '남',
  'job' : '직장인'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/128/128/2',
  'name' : '김헌영2',
  'birthday' : '841226',
  'gender' : '남',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/128/128/3',
  'name' : '김헌영3',
  'birthday' : '841227',
  'gender' : '남',
  'job' : '직장인'
}
]

class App extends Component {
  render(){ 
    return (
      <div>
       {
         // map을 이용해서 반복문 사용
         customers.map(c =>{
           return (
             <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
             />
           )
         })       
       }
      </div>
    );
  }
}

export default App;
