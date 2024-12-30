import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../CommonPages/Cover';

// Tab 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup','dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)


    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className='w-11/12 mx-auto py-20 '>
            <Helmet>
                <title>Order | Bistro-Resturant</title>
            </Helmet>

            <div className='-mt-20'>
                <Cover img={orderImg} title={'Order Food'} tagline={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad labore laudantium error nam  '}></Cover>

                <div className='mt-20'>
                    {/* Tabs  */}
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                            <TabPanel>
                                <OrderTab items={salad}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab items={pizza}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab items={soup}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab items={desserts}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab items={drinks}></OrderTab>
                            </TabPanel>
                    </Tabs>
                </div>
            </div>

            
        </div>
    );
};

export default Order;