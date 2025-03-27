import { create } from "@bufbuild/protobuf";
import { type Timestamp, TimestampSchema } from "@bufbuild/protobuf/wkt";

const ts: Timestamp = create(TimestampSchema, {});

console.log(ts);
