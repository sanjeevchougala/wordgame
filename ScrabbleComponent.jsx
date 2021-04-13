
import React, { Component } from 'react'
import  words from './words-list.json'
import  words_list from './words-list-dictionary'

export default class ScrabbleComponent extends Component {
    constructor(){
        super()
        this.state = {
            random_word : words_list[Math.floor(Math.random() * words_list.length)],
            wordsFetched : words_list[Math.floor(Math.random() * words_list.length)],
            textToSearch : 'Me!',
            limitWords : 10
        }
    }
    
    getAWord = () => {
        this.setState( {
            random_word : words_list[Math.floor(Math.random() * words_list.length)]
        })
    }

    handleChange = (e) => {
        this.setState( {
            textToSearch : e.target.value
        })
    }

    fetchWords= (e) => {
        this.setState({
            wordsFetched : words_list.filter((item) => (item.word.includes(this.state.textToSearch.toUpperCase())))
        })
    }


    render() {
        return (
            <div>   
                <h1> The Word is: {this.state.random_word.word}</h1>

               <button className="btn btn-info" name= "randomWord" onClick={this.getAWord}style={{"fontSize": "10px", "padding": "10px 10px", width: "100px"}}>Get A Random Word!</button>
               <table className='table table-striped table-bordered table-sm'>
                    <thead className='table-dark'>
                        <td>Word</td>
                        <td>Type</td>
                        <td>Definition</td>
                    </thead>
                    <tbody>
                         <tr><td>{this.state.random_word.word}</td> <td>{this.state.random_word.pos}</td> <td>{this.state.random_word.definitions}</td></tr>
                    </tbody>
                </table>
                To search a word => Change <input onChange={this.handleChange} value={this.state.textToSearch}/>{this.state.textToSearch.length && <button className="btn btn-info" name= "searchWord" onClick={this.fetchWords}style={{"fontSize": "10px", "padding": "10px 10px", width: "100px"}}>Search</button>}
                <table className='table table-striped table-bordered table-sm'> 
                    <thead className='table-dark'>
                        <td>Word</td>
                        <td>Type</td>
                        <td>Definition</td>
                    </thead>
                    <tbody>
                        {this.state.wordsFetched.length && this.state.wordsFetched.slice(0,this.state.limitWords).map((w) => <tr key={Math.random()* words_list.length}><td>{w.word}</td> <td>{w.pos}</td> <td>{w.definitions}</td></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
