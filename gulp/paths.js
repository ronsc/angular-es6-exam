'use strict';

import path from 'path';

const root = path.dirname(__dirname);
const paths = {

	test: {
		config: {
			karma: `${root}/karma.conf.js`
		}
	}
};

export default paths;