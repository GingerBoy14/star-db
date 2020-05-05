import React, {Component} from "react";
import ErrorIndicator from "../Error/ErrorIndicator";
import Spinner from "../Spinner";

const dataDetails = (View, getData, fields) => {
    return class extends Component{

        state = {
            item: null,
            loading: true
        };

        componentDidMount() {

            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId){
                this.setState({loading:true});
                this.updateItem();
            }
        }

        updateItem(){
            const { itemId } = this.props;
            if (!itemId){
                return;
            }
            getData(itemId)
                .then((item) =>{
                    this.setState({
                        item,
                        loading: false,
                        error:false
                    })
                })
                .catch(()=>this.setState({error:true}))
        }

        render() {
            const {item, loading, error} = this.state;


            const hasData = !(loading || error);

            const errorMassage = error ? <ErrorIndicator/> : null;
            const spinner = loading && item ? <Spinner/> : null;
            const content = hasData ?
                <View item={item}>
                    {fields}
                </View> : null;
            const select = !item&&!error ? <span className="select-message">Select a person from a list</span> : null;
            return(
                <div className="person-detail card">
                    {spinner}
                    {select}
                    {errorMassage}
                    {content}
                </div>
            );
        };
    }
};

export default dataDetails;


