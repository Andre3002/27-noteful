import React, { Component } from "react"
import FolderList from "./Nav/FolderList"
import NoteList from "./NoteList/NoteList"
import "./App.css"
import { Route } from "react-router-dom"
import store from "./Store.js"
import Note from "./Note/Note"

export default class App extends Component {
  state = {
    notes: store.notes,
    folders: store.folders,
  }

  render() {
    return (
      <div className="App">
        <nav className="App__nav">
          <Route
            path="/"
            render={(routerProps) => (
              <FolderList folders={this.state.folders} />
            )}
          />
        </nav>
        <header className="App__header">
          <h1> Noteful</h1>
        </header>

        <main className="App__main">
          <Route
            exact
            path="/"
            render={(routerProps) => <NoteList notes={this.state.notes} match={routerProps.match}/>}
          />
          <Route
            path="/folder/:folderId"
            render={(routerProps) => <NoteList notes={this.state.notes} match={routerProps.match}/>}
          />
          <Route
            path="/note/:noteId"
            render={(routerProps) => <Note notes={this.state.notes} match={routerProps.match}/>}
          />
        </main>
      </div>
    )
  }
}
