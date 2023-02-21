import Layout from 'components/Layout';
import ArrivedIdnTable from 'components/LogisticChina/ArrivedIdn/ArrivedIdnTable';

const ArrivedIdn = () => {
  const SUBROUTES = [
    { name: 'Repacking', pathname: '/logistic-china/repacking' },
    { name: 'Send to IDN', pathname: '/logistic-china/send-to-idn' },
    { name: 'Container', pathname: '/logistic-china/container' },
    { name: 'OTW IDN', pathname: '/logistic-china/otw-idn' },
    { name: 'Arrived IDN', pathname: '/logistic-china/arrived-idn' },
  ];

  return (
    <Layout routes={SUBROUTES} title="Logistic China">
      <p className="my-4 bg-white w-32 p-2 rounded-md cursor-pointer text-center">
        Arrived IDN
      </p>
      <ArrivedIdnTable />
    </Layout>
  );
};

export default ArrivedIdn;
