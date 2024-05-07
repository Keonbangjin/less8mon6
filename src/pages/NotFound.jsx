import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="text-4xl text-white font-bold">
          404 - Page Not Found
        </div>
      </div>
    );
  }
}
