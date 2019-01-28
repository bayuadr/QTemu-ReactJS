import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Route/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


configure({ adapter: new Adapter() });

describe('App Component =>',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should have component',()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper.contains(<Route exact path="/" component={Home}/>)).toEqual(true)
  })

})

