import React from 'react';
import styled from "styled-components";
import filestack from 'filestack-js';

import {connect} from 'react-redux'
import {postOperations} from '../../state/ducks/posts';


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
`;
const Form = styled.form`
    max-width: 80%;
    border: 0;
    font-size: 1.3rem;
    padding: 1rem 0;
    outline: none;
    resize: vertical;
`;
const Input = styled.input`
    width: 100%;
    border: 0;
    font-size: 1.3rem;
    padding: 1rem;
    border-bottom: 1px solid lightgrey;
    outline: none;
    resize: vertical;
`;
const Textarea = styled.textarea`
    width: 100%;
    border: 0;
    font-size: 1.3rem;
    padding: 1rem;
    border-bottom: 1px solid lightgrey;
    outline: none;
    resize: vertical;
`;
const ImageRow = styled.div`
    flex: 1;
  
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`
const ImageContainer = styled.div`
    flex-basis: calc(33.333% - 4rem);
    flex-grow: 1;
    flex-shrink: 0;
    margin: 0 .5rem .5rem .5rem;
    padding: 1rem;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
`


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      neighborhood: '',
      address: '',
      description: '',
      images: []
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    Object.keys(this.state).forEach((key) => {
      if (key !== 'images') {
        if (!this.state[key].length > 0) {
          console.log(`${key} is not filled out... `);
          return false;
        }
      }
    });

    this.props.create(this.state);
    this.setState({
      title: '',
      neighborhood: '',
      address: '',
      description: '',
      images: []
    })
  };

  async showPicker(e) {
    e.preventDefault();
    const client = filestack.init('ARJXTLHlJRuSq1uXuNdFBz');
    const result = await client.pick({
      fromSources: ["local_file_system"],
      accept: ["image/*"],
      maxFiles: 10
    });
    const urls = result.filesUploaded.map(file => file.url);
    this.setState({
      images: urls
    });
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <Container>
        <h1>Add New Construction Project</h1>

        <Form ref="commentForm" className="comment-form">
          <Input type="text"
                 name='title'
                 value={this.state.title}
                 onChange={(event) => this.handleUserInput(event)}
                 ref="title"
                 placeholder="Title"/>
          <Input type="text"
                 value={this.state.neighborhood}
                 onChange={(event) => this.handleUserInput(event)}
                 name='neighborhood'
                 ref="neighborhood"
                 placeholder="Neighborhood"/>
          <Input type="text"
                 value={this.state.address}
                 name='address'
                 onChange={(event) => this.handleUserInput(event)}
                 ref="address"
                 placeholder="address"/>
          <Textarea ref="description"
                    name='description'
                    value={this.state.description}
                    onChange={(event) => this.handleUserInput(event)}
                    placeholder="description"/>
          <button onClick={this.showPicker.bind(this)}>add images</button>
          <ImageRow>
            {
            this.state.images.map((url, i)=> <ImageContainer key={i}><Image src={url} alt=""/></ImageContainer>)
            }
          </ImageRow>
          <Input type="submit" onClick={this.handleSubmit.bind(this)}/>
        </Form>

      </Container>
    )
  }
};

const mapDispatchToProps = {
  create: postOperations.create,
};


NewPost = connect(
  null,
  mapDispatchToProps
)(NewPost);


export default NewPost;