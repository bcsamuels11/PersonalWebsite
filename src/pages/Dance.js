import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkPageEntry from "../components/WorkPageEntry.js";
import { WORK_EXPERIENCES, WorkTypes } from "../shared/workExperience.js";

export default class Dance extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container style={{ paddingTop: "10vh", paddingBottom: "5vw", height: "100%" }}>
                <h1>Overview</h1>
                <p>
                    Coming Soon!
                </p>

                <h1 style={{ paddingBottom: "2vw" }}>Dance Experience</h1>
                {WORK_EXPERIENCES.filter((work) => work.workType === WorkTypes.DANCE).map((work) => {
                    return (
                        <div style={{ marginBottom: "25px" }}>
                            <WorkPageEntry
                                image={work.image}
                                company={work.company}
                                position={work.position}
                                date={work.date}
                                location={work.location}
                                description={work.shortDescription}
                            />
                        </div>
                    );
                })}
            </Container>
        );
    }

}