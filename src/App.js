import React, { useState, useEffect, useMemo } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form'
import List from './components/List';
import { orderBy as funcOrderBy, remove, filter, includes } from 'lodash';

import { v4 as uuidv4 } from 'uuid';


// App ->  List ->Item


function App() {

    const [item, setItem] = useState([]);
    const [isShowForm, setIsShowForm] = useState(false);
    const [strSearch, setStrSearch] = useState('');
    const [orderBy, setOrderBy] = useState('name');
    const [orderDiv, setOrderDiv] = useState('asc');
    const [itemSelected, setItemSelected] = useState(null);

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('task')) || [];
        setItem(items)
    }, [])


    function handleAdd(item) {
        // console.log(item.id)
        // let { items } = this.state;
        let id = null;
        if (item.id !== '') {//edit
            items.forEach((elm, key) => {
                if (elm.id === item.id) {
                    items[key].name = item.name
                    items[key].level = item.level
                }
            })
        } else {//add
            // console.log(items)
            // items.push({
            id = uuidv4(),
                //     name: item.name,
                //     level: +item.level
                // })
                setItem([
                    ...item,
                    {
                        id: id,
                        name: item.name,
                        level: +item.level
                    }
                ])
        }


        setIsShowForm(false)
        // console.log(items)
        localStorage.setItem("task", JSON.stringify(items))
    }


    function handleEdit(item) {
        // console.log(item)
        // this.setState({
        //     itemSelected: item,
        //     isShowForm: true,
        // })
        setItemSelected(item),
        setIsShowForm(true)
    }

    function handleDelete(id) {
        let newItems = [...item]
        remove(newItems, (items) => {
            return items.id === id;
        })
        // console.log(item)
        // this.setState({
        //     items: this.state.items
        // })
        setItem(newItems)
        localStorage.setItem("task", JSON.stringify(items))

    }

    function handleSort(orderBy, orderDiv) {
        // this.setState({
        //     orderBy: orderBy,
        //     orderDiv: orderDiv
        // })
        setOrderBy(orderBy),
        setOrderDiv(orderDiv)

    }
    function handleToogleForm() {
        // this.setState({
        //     isShowForm: !this.state.isShowForm,
        // })
        setIsShowForm(!isShowForm)
        setItemSelected(null)
    }
    function closeForm() {
        // this.setState({
        //     isShowForm: !this.state.isShowForm
        // })
        setIsShowForm(!isShowForm)
    }
    function handleSearch(value) {
        // this.setState({
        //     strSearch: value
        // })
        setStrSearch(value)
    }



    // console.log("strSearch:", this.state.strSearch)
    // let orderBy = this.state.orderBy;
    // let orderDiv = this.state.orderDiv;

    // console.log(orderBy + "-" + orderDiv)
    // console.log(this.state.items)
 
    let itemsOrigin = (item !==null) ? [...item] :[];
    let items = [];
    let search = strSearch;

    // let itemSelected = this.state.itemSelected;
    // console.log(search)
    // itemsOrigin.forEach((item)=>{
    //     if(item.name.toLowerCase().indexOf(this.state.strSearch.toLowerCase())!==-1){
    //         items.push(item)
    //     }
    // })
    items = filter(item || [], (item) => {
        return includes(item.name, search)
    })
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    // console.log(this.viewAgain(items)) về sorttttttttttttttt
    items = funcOrderBy(items, [orderBy], [orderDiv])
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------

    let elmForm = null
    if (isShowForm) {
        elmForm = <Form itemSelected={itemSelected} handleAdd={handleAdd} closeForm={closeForm} />
    }
    return (
        <div className="row">
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}
            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control
                onClickSort={handleSort}
                orderBy={orderBy}
                orderDiv={orderDiv}
                onClickSearchGo={handleSearch}
                onClickAdd={handleToogleForm}
                isShowForm={isShowForm} strSearch={strSearch}
            />
            {/* CONTROL (SEARCH + SORT + ADD) : END */}
            {/* FORM : START */}
            {elmForm}
            {/* FORM : END */}
            {/* LIST : START */}
            <List
                onClickEdit={handleEdit}
                onClickDelete={handleDelete} items={items} />

        </div>
    );


}

export default App;
