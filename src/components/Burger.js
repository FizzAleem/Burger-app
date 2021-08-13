import React, { Component } from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {

    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }
    bill = () => ((this.state.lettuce * 2.0) + (this.state.tomato * 2.5)+ (this.state.cheese * 1.5) + (this.state.meat * 3.0));
    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;


        }else{
            stateValue = stateValue - 1;

        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;
        let burger = [];

        // outputting the lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    render(){
        return (
            <>
            <div class="Toolbar">

                  <div class="box" >
                    <img src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png"/>

                  </div>
                  <div class="main">
                    <div class="highlight">
                      Burger Builder
                    </div>
                    <div class="line" >

                    </div>
                  </div>

                  <p class="login">
                    Login
                  </p>


            </div>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                <p >Current price: {this.bill()}</p>
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')}>Less</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Less</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Less</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>Less</button>
                    </div>
                </div>
            </>
        );
    }
}
