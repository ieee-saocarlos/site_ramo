import React, { Component } from "react";
import PropTypes from "prop-types";
import Calendar from "./Calendar";

const mock = {
    events: [
        {
            start: "2021-03-05T13:00:00-03:00",
            end: "2021-03-05T14:00:00-03:00",
            title: "Reunião Site",
        },
        {
            start: "2021-03-05T16:00:00-03:00",
            end: "2021-03-05T17:00:00-03:00",
            title: "Consulta Vista",
        },
    ],
};

export default class CalendarProvider extends Component {
    static propTypes = {
        provider: PropTypes.any,
    };
    static defaultProps = {
        provider: mock.events,
    };
    componentDidMount() {}

    render() {
        return (
            <div>
                <Calendar data={this.props.provider} />
            </div>
        );
    }
}
