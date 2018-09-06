import React from 'react';
import renderer from 'react-test-renderer';
import 'helpers/mocking/react-dom_mock';

import ContentPackConstraints from 'components/content-packs/ContentPackConstraints';

describe('<ContentPackConstraints />', () => {
  it('should render with new constraints without forced fulfillment', () => {
    const constraints = [{
      type: 'server-version',
      version: '>=3.0.0-alpha.2+af8d8e0'
    }, {
      plugin: 'org.graylog.plugins.threatintel.ThreatIntelPlugin',
      type: 'plugin-version',
      version: '>=3.0.0-alpha.2'
    }];
    const wrapper = renderer.create(<ContentPackConstraints constraints={constraints} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with new constraints with forced fulfillment', () => {
    const constraints = [{
      type: 'server-version',
      version: '>=3.0.0-alpha.2+af8d8e0'
    }, {
      plugin: 'org.graylog.plugins.threatintel.ThreatIntelPlugin',
      type: 'plugin-version',
      version: '>=3.0.0-alpha.2'
    }];
    const wrapper = renderer.create(<ContentPackConstraints constraints={constraints} isFulfilled />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with created constraints', () => {
    const constraints = [
      {
        constraint: {
          type: 'server-version',
          version: '>=3.0.0-alpha.2+af8d8e0',
        },
        fulfilled: true,
      }, {
        constraint: {
          plugin: 'org.graylog.plugins.threatintel.ThreatIntelPlugin',
          type: 'plugin-version',
          version: '>=3.0.0-alpha.2',
        },
        fulfilled: false,
      }];
    const wrapper = renderer.create(<ContentPackConstraints constraints={constraints} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
