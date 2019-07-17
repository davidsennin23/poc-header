import React, { Component } from 'react';
import styled from 'styled-components';

const Round = (size) => styled.div`
    width: ${size};
    heigt: ${size};
    border-radius: 50%;
`;

const RoundedElement = (Element) =>
    class extends Component {

        render() {

        }

    }

const MakeRound = () => {}

export { MakeRound }
export default RoundedElement;