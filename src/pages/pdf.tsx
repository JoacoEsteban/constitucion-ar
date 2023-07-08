import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://www.argentina.gob.ar/sites/default/files/constitucion_0.pdf',
      permanent: true,
    }
  }
}

export default function Download () {}