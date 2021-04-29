import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import{ Button, Form, Dropdown} from 'react-bootstrap'
import '../styles/searchsummonerstyles.css';

const SearchSummoner = () => {
    return (
        <div className = "searchClass">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Summoner name</Form.Label>
                    <Form.Control type="text" placeholder="Enter a summoner name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className="dropDownServerSelect">
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select a region
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >NA</Dropdown.Item>
                        <Dropdown.Item>EUW</Dropdown.Item>
                        <Dropdown.Item >EUNE</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default SearchSummoner;