import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../hocs/Layout';

const Dashboard = () => {
    const router = useRouter();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.loading);

    if (typeof window !== 'undefined' && !loading && !isAuthenticated)
        router.push('/login');

    return (
        <Layout
            title='httpOnly Auth | Dashboard'
            content='Dashboard page for httpOnly tutorial app'
        >
            <div className='p-5 bg-light rounded-3'>
                <div className='container-fluid py-3'>
                    <h1 className='display-5 fw-bold'>
                        User Dashboard
                    </h1>
                    <p className='fs-4 mt-3'>
                        Welcome {user !== null && user.first_name} to the httpOnly Auth Tutorial Site!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
