import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

app.model(require("./models/URLText"));

app.model(require("./models/MarkdownText"));

app.model(require("./models/JsonText"));

app.model(require("./models/EncryptText"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
