import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1634745291366-4e4d79b2497a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')", height: 400, width: 'vw' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>City Explorer</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
