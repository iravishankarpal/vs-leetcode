import { expect, test, describe, it } from 'vitest';

global.expect = expect;
global.test = test;
global.describe = describe;
global.it = it;

global.__dirname = __dirname;
