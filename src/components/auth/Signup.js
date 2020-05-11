import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <label for="Email">
                        Email
                    </label>
                </fieldset>
                <fieldset>
                    <label for="Password">
                        Password
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Signup;