import React from "react";
import { Container } from "react-bootstrap";
import Otherstack from "./Otherstack";
import Virtualstack from "./Virtualstack";
import Codestack from "./Codestack";
import Osstack from "./Osstack";
import Idestack from "./Idestack";
import Networkstack from "./Networkstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
         Les outils et technologies que <strong className="purple">j'utilise</strong>
        </h1>
        <br />
        <br />
        <h4 class="stack-title purple">Systéme d'exploitation</h4>
        <Osstack />
        <h4 class="stack-title purple">Réseau informatique</h4>
        <Networkstack />
        <h4 class="stack-title purple">Solution de virtualisation</h4>
        <Virtualstack />
        <h4 class="stack-title purple">Language de programmation</h4>
        <Codestack />
        <h4 class="stack-title purple">Environnement de développement</h4>
        <Idestack />
        <h4 class="stack-title purple">Autres</h4>
        <Otherstack />
      </Container>
    </Container>
  );
}

export default About;
