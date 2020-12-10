import { Button, Card, Row, Col, Tag, Form, Input } from 'ant-design-vue';
import { createApp } from 'vue';

export default function loadComponent(app: ReturnType<typeof createApp>) {
  app.use(Button)
  app.use(Card)
  app.use(Row)
  app.use(Col)
  app.use(Tag)
  app.use(Form)
  app.use(Input)
}