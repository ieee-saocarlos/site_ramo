import React, { Component } from "react";
import PropTypes from "prop-types";
import mock from "../mock/calendar_events";
import Calendar from "./Calendar";
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
