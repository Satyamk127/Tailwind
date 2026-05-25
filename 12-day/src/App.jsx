import './App.css'

function App() {

  return (
    <div style={{
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg,#1d2671,#c33764)",
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "350px",
        padding: "40px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        color: "white"
      }}>

        <h1 style={{
          textAlign: "center",
          marginBottom: "30px"
        }}>
          Login
        </h1>

        <form>

          <input
            type="email"
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              border: "none",
              borderRadius: "10px",
              outline: "none",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              fontSize: "16px"
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              border: "none",
              borderRadius: "10px",
              outline: "none",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              fontSize: "16px"
            }}
          />

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            fontSize: "14px"
          }}>

            <label>
              <input type="checkbox" /> Remember me
            </label>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              Forgot Password?
            </a>

          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "white",
              color: "#1d2671",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Login
          </button>

          <p style={{
            textAlign: "center",
            marginTop: "20px"
          }}>

            Don't have an account?

            <a
              href="#"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                marginLeft: "5px"
              }}
            >
              Register
            </a>

          </p>

        </form>

      </div>

    </div>
  )
}

export default App