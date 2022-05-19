import Register from './components/Register';
import Login from './components/Login';
import Base from './components/Base';
import Home from './components/Home';
import Layout from './components/Layout';
import Materials from './components/Materials';
import Opinion from './components/Opinion';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lecturers from './components/Lecturers';
import Help from './components/Help';
import Profil from './components/Profil';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="base" element={<Base />} />
        <Route path="/" element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="opinion" element={<Opinion />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="materials" element={<Materials />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lecturers" element={<Lecturers />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="profil" element={<Profil />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin, ROLES.User]} />}>
          <Route path="opinion" element={<Opinion />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;