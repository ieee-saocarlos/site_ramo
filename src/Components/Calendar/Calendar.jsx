import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../css/calendar.css";
export default class Calendar extends Component {
    static propTypes = {
        data: PropTypes.array,
    };

    filterDates(cal, data) {
        let events = [];
        /**
         * toDateString contem informação de ano, mes e dia
         * e.g: "Fri Feb 26 2021"
         */
        const item = cal.date.toDateString();
        data.forEach((date) => {
            const event = new Date(date.start).toDateString();
            if (item === event) {
                events.push(date.title);
            }
        });
        //TODO: Criar componente para Evento com mais informações
        return events.map((e) => (
            <p>
                <span>{e}</span>
            </p>
        ));
    }

    render() {
        return (
            <div>
                <ReactCalendar
                    locale="pt-BR"
                    tileContent={(c) => this.filterDates(c, this.props.data)}
                />
            </div>
        );
    }
}
