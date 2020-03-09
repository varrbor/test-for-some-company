import React from 'react';
import styles from '../../../styles/module-styles/accordion.module.css';

export default class extends React.Component {
    state = {
        accordionItems: null,
    }

    componentDidMount  () {
        let accordion = [];

        this.props.data.forEach((i) => {
            accordion.push({
                title: i.title, 
                content: i.content, 
                open: false
            });
        });
        
        this.setState({
            accordionItems: accordion
        });
    }
    
    click = i => {
        const newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i)
      
        newAccordion[index].open = !newAccordion[index].open;
        this.setState({accordionItems: newAccordion});
    }
    
    render() {
        if(this.state.accordionItems !== null) {
            const sections = this.state.accordionItems.map((i) => {
                return (
                    <div key={this.state.accordionItems.indexOf(i)}>
                            <div 
                                className={styles.title} 
                                onClick={this.click.bind(null, i)}>

                                <div className={styles.arrow__wrapper}>
                                    <i className={i.open 
                                        ? (styles.fa + ' ' + styles.fa__angle__down + ' ' + styles.fa__rotate__180) 
                                        : (styles.fa + ' ' + styles.fa__angle__down)}
                                    ></i>
                                </div>
                    
                                <span className={styles.title__text}>
                                    {i.title}
                                </span>
                            </div>
                        <div className={i.open 
                            ? (styles.content + ' ' + styles.content__open) 
                            : styles.content}>

                            <div className={i.open 
                                ? (styles.content__text + ' ' + styles.content__text__open)
                                : (styles.content__text)}> 
                                {i.content}
                            </div>
                        </div>
                    </div>
                )
            });

            return (
                <div className={styles.accordion}>
                    {sections}
                </div>
            );
        }
    
        else return '';
    }
}
