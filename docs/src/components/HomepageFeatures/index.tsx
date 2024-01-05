import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Install',
    Svg: require('@site/static/img/undraw_setup_wizard.svg').default,
    description: (
      <>
        Connect the hardware together, install the software with ESP web tools
        and in no time you can use the data in Home Assistant.
      </>
    ),
  },
  {
    title: 'Measure your (stupid) Meter',
    Svg: require('@site/static/img/undraw_metrics.svg').default,
    description: (
      <>
        Use the Home Assistant Glow on a meter that is equipped with a pulse LED,
        measure how much power (w) and energy (kWh) your house consumes.
      </>
    ),
  },
  {
    title: 'Do you need Help?',
    Svg: require('@site/static/img/undraw_showing_support.svg').default,
    description: (
      <>
        Are you encountering problems? Then you can create an issue or discussion
        topic on GitHub so that others can help you.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
