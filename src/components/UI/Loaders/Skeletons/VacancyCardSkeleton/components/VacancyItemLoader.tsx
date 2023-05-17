import ContentLoader from 'react-content-loader';

export const VacancyItemLoader = (): JSX.Element => (
    <ContentLoader
        speed={3}
        width='100%'
        height='24px'
        viewBox='0 0 100% 100%'
        backgroundColor='#e3e3e3'
        foregroundColor='#d4d4d4'
    >
      <rect x='0' y='0' rx='10' ry='10' width='100%' height='100%'/>
    </ContentLoader>
);
