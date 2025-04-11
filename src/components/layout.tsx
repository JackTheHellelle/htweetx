import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  max-width: 860px;
`;

const Head = styled.div`
  position: fixed;
  width: 100%;
  top: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const BodyGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 7fr;
  height: 100%;
  padding: 90px 0px 50px;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
 
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: #FC4E00;
    svg {
      fill: #FC4E00;
    }
  }
`;

export default function Layout() {
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  }
  return (    
    <Wrapper>
      <Head>
        <Logo src={`${import.meta.env.BASE_URL}img/h_logo.png`} 
          onClick={() => {
            if (typeof (window as any).scrollToTimelineTop === "function") {
              (window as any).scrollToTimelineTop();
            }
          }}
        />
      </Head>
      <BodyGrid>
        <Menu>
          <Link to="/">
            <MenuItem>
              {/* <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                />
              </svg> */}
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                width="40"
                height="40"
              >
                <g transform="translate(10.000000,90.000000) scale(0.100000,-0.100000)"
                fill="#currentColor" stroke="none">
                  <path fill="#ffffff" d="M575 768 c-295 -49 -395 -82 -475 -154 -50 -45 -70 -87 -70 -145 0
                  -37 6 -48 50 -92 53 -53 67 -57 50 -13 -43 114 61 248 218 281 l33 7 -20 -41
                  c-12 -22 -57 -122 -101 -222 -89 -203 -112 -239 -180 -281 -34 -21 -52 -41
                  -63 -69 -15 -38 -15 -39 6 -34 12 2 90 16 172 30 323 55 359 66 410 127 30 36
                  89 158 80 166 -12 13 -56 -16 -87 -58 -52 -69 -84 -85 -218 -110 -117 -22
                  -145 -32 -115 -43 17 -7 217 26 260 42 l30 12 -20 -20 c-22 -22 -78 -37 -285
                  -76 -195 -36 -212 -34 -137 20 22 17 55 48 72 70 33 45 205 431 205 463 0 11
                  -12 30 -26 41 l-25 20 38 9 c21 6 70 15 108 21 39 7 105 19 148 28 42 9 80 14
                  83 10 4 -3 9 -28 12 -54 l5 -48 -24 22 c-52 48 -132 57 -173 21 -13 -13 -41
                  -61 -61 -106 -50 -114 -57 -138 -39 -153 21 -17 18 -25 -21 -47 -23 -14 -44
                  -41 -64 -81 -17 -33 -51 -83 -76 -111 -25 -28 -45 -53 -45 -56 0 -3 18 5 39
                  17 46 25 89 81 121 156 13 31 29 53 38 53 8 0 43 5 76 11 58 10 62 12 78 50 9
                  21 13 39 10 39 -4 -1 -36 -7 -72 -15 -36 -8 -68 -14 -72 -15 -3 0 18 53 47
                  118 47 104 57 118 84 126 54 16 92 -3 126 -62 44 -75 61 -67 56 28 -1 41 -6
                  91 -9 111 l-7 35 -170 -28z m-335 -115 c0 -5 -16 -18 -35 -31 -46 -29 -93 -95
                  -107 -149 -11 -47 -23 -55 -33 -22 -20 61 34 141 125 186 51 26 50 25 50 16z"/>
                </g>
              </svg>
            </MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
            </MenuItem>
          </Link>
          <MenuItem onClick={onLogOut} className="log-out">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
              />
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
              />
            </svg>
          </MenuItem>
        </Menu>
        <Outlet />
      </BodyGrid>
      
    </Wrapper>
  );
}