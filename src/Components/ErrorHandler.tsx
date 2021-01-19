import React from 'react';

export class ErrorHandler extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {
            error: false,
            info: null,
        };
    }

    componentDidCatch(error: Error | null, info: any) {
        console.log("error handler called")
        this.setState({
            error: error,
            info: info,
        });
    }

    // static getDerivedStateFromError(error: Error) {
    //     console.log("error handler called")
    //     return {
    //         error: true
    //     }
    // }
    render() {
        if (this.state.error) {
            return (
                <React.Fragment>
                    <h5>Some error occured</h5>
                </React.Fragment>
            );
        }
        return this.props.children;
    }
}
