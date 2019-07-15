export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
     * representation of dates and times using the Gregorian calendar.
     */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
}

export interface BooleanQueryOperatorInput {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Maybe<Scalars['Boolean']>[]>;
    nin?: Maybe<Maybe<Scalars['Boolean']>[]>;
}

export interface DateQueryOperatorInput {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Maybe<Scalars['Date']>[]>;
    nin?: Maybe<Maybe<Scalars['Date']>[]>;
}

export type Directory = Node & {
    __typename?: 'Directory';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    sourceInstanceName?: Maybe<Scalars['String']>;
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Int']>;
    prettySize?: Maybe<Scalars['String']>;
    modifiedTime?: Maybe<Scalars['Date']>;
    accessTime?: Maybe<Scalars['Date']>;
    changeTime?: Maybe<Scalars['Date']>;
    birthTime?: Maybe<Scalars['Date']>;
    root?: Maybe<Scalars['String']>;
    dir?: Maybe<Scalars['String']>;
    base?: Maybe<Scalars['String']>;
    ext?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    relativeDirectory?: Maybe<Scalars['String']>;
    dev?: Maybe<Scalars['Int']>;
    mode?: Maybe<Scalars['Int']>;
    nlink?: Maybe<Scalars['Int']>;
    uid?: Maybe<Scalars['Int']>;
    gid?: Maybe<Scalars['Int']>;
    rdev?: Maybe<Scalars['Int']>;
    blksize?: Maybe<Scalars['Int']>;
    ino?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    atimeMs?: Maybe<Scalars['Float']>;
    mtimeMs?: Maybe<Scalars['Float']>;
    ctimeMs?: Maybe<Scalars['Float']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    atime?: Maybe<Scalars['Date']>;
    mtime?: Maybe<Scalars['Date']>;
    ctime?: Maybe<Scalars['Date']>;
    birthtime?: Maybe<Scalars['Date']>;
};

export interface DirectoryModifiedTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryAccessTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryChangeTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryBirthTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryAtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryMtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryCtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryBirthtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface DirectoryConnection {
    __typename?: 'DirectoryConnection';
    totalCount: Scalars['Int'];
    edges: DirectoryEdge[];
    nodes: Directory[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: DirectoryGroupConnection[];
}

export interface DirectoryConnectionDistinctArgs {
    field: DirectoryFieldsEnum;
}

export interface DirectoryConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
}

export interface DirectoryEdge {
    __typename?: 'DirectoryEdge';
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
}

export enum DirectoryFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    blksize = 'blksize',
    ino = 'ino',
    blocks = 'blocks',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    birthtimeMs = 'birthtimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
}

export interface DirectoryFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
}

export interface DirectoryGroupConnection {
    __typename?: 'DirectoryGroupConnection';
    totalCount: Scalars['Int'];
    edges: DirectoryEdge[];
    nodes: Directory[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export interface DirectorySortInput {
    fields?: Maybe<Maybe<DirectoryFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

export enum ExcerptFormats {
    PLAIN = 'PLAIN',
    HTML = 'HTML',
    MARKDOWN = 'MARKDOWN',
}

export type FeaturesJson = Node & {
    __typename?: 'FeaturesJson';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
};

export interface FeaturesJsonConnection {
    __typename?: 'FeaturesJsonConnection';
    totalCount: Scalars['Int'];
    edges: FeaturesJsonEdge[];
    nodes: FeaturesJson[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: FeaturesJsonGroupConnection[];
}

export interface FeaturesJsonConnectionDistinctArgs {
    field: FeaturesJsonFieldsEnum;
}

export interface FeaturesJsonConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FeaturesJsonFieldsEnum;
}

export interface FeaturesJsonEdge {
    __typename?: 'FeaturesJsonEdge';
    next?: Maybe<FeaturesJson>;
    node: FeaturesJson;
    previous?: Maybe<FeaturesJson>;
}

export enum FeaturesJsonFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    title = 'title',
    description = 'description',
    image = 'image',
}

export interface FeaturesJsonFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<StringQueryOperatorInput>;
}

export interface FeaturesJsonGroupConnection {
    __typename?: 'FeaturesJsonGroupConnection';
    totalCount: Scalars['Int'];
    edges: FeaturesJsonEdge[];
    nodes: FeaturesJson[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export interface FeaturesJsonSortInput {
    fields?: Maybe<Maybe<FeaturesJsonFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

export type File = Node & {
    __typename?: 'File';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    sourceInstanceName?: Maybe<Scalars['String']>;
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Int']>;
    prettySize?: Maybe<Scalars['String']>;
    modifiedTime?: Maybe<Scalars['Date']>;
    accessTime?: Maybe<Scalars['Date']>;
    changeTime?: Maybe<Scalars['Date']>;
    birthTime?: Maybe<Scalars['Date']>;
    root?: Maybe<Scalars['String']>;
    dir?: Maybe<Scalars['String']>;
    base?: Maybe<Scalars['String']>;
    ext?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    relativeDirectory?: Maybe<Scalars['String']>;
    dev?: Maybe<Scalars['Int']>;
    mode?: Maybe<Scalars['Int']>;
    nlink?: Maybe<Scalars['Int']>;
    uid?: Maybe<Scalars['Int']>;
    gid?: Maybe<Scalars['Int']>;
    rdev?: Maybe<Scalars['Int']>;
    blksize?: Maybe<Scalars['Int']>;
    ino?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    atimeMs?: Maybe<Scalars['Float']>;
    mtimeMs?: Maybe<Scalars['Float']>;
    ctimeMs?: Maybe<Scalars['Float']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    atime?: Maybe<Scalars['Date']>;
    mtime?: Maybe<Scalars['Date']>;
    ctime?: Maybe<Scalars['Date']>;
    birthtime?: Maybe<Scalars['Date']>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<Scalars['String']>;
    childMarkdownRemark?: Maybe<MarkdownRemark>;
    childrenFeaturesJson?: Maybe<Maybe<FeaturesJson>[]>;
};

export interface FileModifiedTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileAccessTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileChangeTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileBirthTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileAtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileMtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileCtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileBirthtimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface FileConnection {
    __typename?: 'FileConnection';
    totalCount: Scalars['Int'];
    edges: FileEdge[];
    nodes: File[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: FileGroupConnection[];
}

export interface FileConnectionDistinctArgs {
    field: FileFieldsEnum;
}

export interface FileConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
}

export interface FileEdge {
    __typename?: 'FileEdge';
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
}

export enum FileFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    blksize = 'blksize',
    ino = 'ino',
    blocks = 'blocks',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    birthtimeMs = 'birthtimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    publicURL = 'publicURL',
}

export interface FileFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
}

export interface FileGroupConnection {
    __typename?: 'FileGroupConnection';
    totalCount: Scalars['Int'];
    edges: FileEdge[];
    nodes: File[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export interface FileSortInput {
    fields?: Maybe<Maybe<FileFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

export interface FloatQueryOperatorInput {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Maybe<Scalars['Float']>[]>;
    nin?: Maybe<Maybe<Scalars['Float']>[]>;
}

export enum HeadingLevels {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

export interface Internal {
    __typename?: 'Internal';
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Maybe<Scalars['String']>[]>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
}

export interface InternalFilterInput {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
}

export interface IntQueryOperatorInput {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Maybe<Scalars['Int']>[]>;
    nin?: Maybe<Maybe<Scalars['Int']>[]>;
}

export interface JsonQueryOperatorInput {
    eq?: Maybe<Scalars['JSON']>;
    ne?: Maybe<Scalars['JSON']>;
    in?: Maybe<Maybe<Scalars['JSON']>[]>;
    nin?: Maybe<Maybe<Scalars['JSON']>[]>;
    regex?: Maybe<Scalars['JSON']>;
    glob?: Maybe<Scalars['JSON']>;
}

export interface MarkdownHeading {
    __typename?: 'MarkdownHeading';
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
}

export interface MarkdownHeadingFilterInput {
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
}

export interface MarkdownHeadingFilterListInput {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
}

export type MarkdownRemark = Node & {
    __typename?: 'MarkdownRemark';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
    excerpt?: Maybe<Scalars['String']>;
    rawMarkdownBody?: Maybe<Scalars['String']>;
    fileAbsolutePath?: Maybe<Scalars['String']>;
    html?: Maybe<Scalars['String']>;
    htmlAst?: Maybe<Scalars['JSON']>;
    excerptAst?: Maybe<Scalars['JSON']>;
    headings?: Maybe<Maybe<MarkdownHeading>[]>;
    timeToRead?: Maybe<Scalars['Int']>;
    tableOfContents?: Maybe<Scalars['String']>;
    wordCount?: Maybe<WordCount>;
};

export interface MarkdownRemarkExcerptArgs {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
    format?: Maybe<ExcerptFormats>;
}

export interface MarkdownRemarkExcerptAstArgs {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
}

export interface MarkdownRemarkHeadingsArgs {
    depth?: Maybe<HeadingLevels>;
}

export interface MarkdownRemarkTableOfContentsArgs {
    pathToSlugField?: Maybe<Scalars['String']>;
    maxDepth?: Maybe<Scalars['Int']>;
    heading?: Maybe<Scalars['String']>;
}

export interface MarkdownRemarkConnection {
    __typename?: 'MarkdownRemarkConnection';
    totalCount: Scalars['Int'];
    edges: MarkdownRemarkEdge[];
    nodes: MarkdownRemark[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: MarkdownRemarkGroupConnection[];
}

export interface MarkdownRemarkConnectionDistinctArgs {
    field: MarkdownRemarkFieldsEnum;
}

export interface MarkdownRemarkConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MarkdownRemarkFieldsEnum;
}

export interface MarkdownRemarkEdge {
    __typename?: 'MarkdownRemarkEdge';
    next?: Maybe<MarkdownRemark>;
    node: MarkdownRemark;
    previous?: Maybe<MarkdownRemark>;
}

export enum MarkdownRemarkFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    frontmatter___title = 'frontmatter___title',
    frontmatter___path = 'frontmatter___path',
    frontmatter___image = 'frontmatter___image',
    frontmatter___author = 'frontmatter___author',
    frontmatter___avatar = 'frontmatter___avatar',
    frontmatter___shortDescription = 'frontmatter___shortDescription',
    frontmatter___tags = 'frontmatter___tags',
    frontmatter___date = 'frontmatter___date',
    frontmatter___featured = 'frontmatter___featured',
    frontmatter___draft = 'frontmatter___draft',
    frontmatter___name = 'frontmatter___name',
    frontmatter___link = 'frontmatter___link',
    frontmatter___address = 'frontmatter___address',
    frontmatter___weight = 'frontmatter___weight',
    excerpt = 'excerpt',
    rawMarkdownBody = 'rawMarkdownBody',
    fileAbsolutePath = 'fileAbsolutePath',
    html = 'html',
    htmlAst = 'htmlAst',
    excerptAst = 'excerptAst',
    headings = 'headings',
    headings___value = 'headings___value',
    headings___depth = 'headings___depth',
    timeToRead = 'timeToRead',
    tableOfContents = 'tableOfContents',
    wordCount___paragraphs = 'wordCount___paragraphs',
    wordCount___sentences = 'wordCount___sentences',
    wordCount___words = 'wordCount___words',
}

export interface MarkdownRemarkFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<WordCountFilterInput>;
}

export interface MarkdownRemarkFrontmatter {
    __typename?: 'MarkdownRemarkFrontmatter';
    title?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    avatar?: Maybe<Scalars['String']>;
    shortDescription?: Maybe<Scalars['String']>;
    tags?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Date']>;
    featured?: Maybe<Scalars['Boolean']>;
    draft?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    link?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    weight?: Maybe<Scalars['Int']>;
}

export interface MarkdownRemarkFrontmatterDateArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface MarkdownRemarkFrontmatterFilterInput {
    title?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    avatar?: Maybe<StringQueryOperatorInput>;
    shortDescription?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    featured?: Maybe<BooleanQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    address?: Maybe<StringQueryOperatorInput>;
    weight?: Maybe<IntQueryOperatorInput>;
}

export interface MarkdownRemarkGroupConnection {
    __typename?: 'MarkdownRemarkGroupConnection';
    totalCount: Scalars['Int'];
    edges: MarkdownRemarkEdge[];
    nodes: MarkdownRemark[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export interface MarkdownRemarkSortInput {
    fields?: Maybe<Maybe<MarkdownRemarkFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

/** Node Interface */
export interface Node {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}

export interface NodeFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}

export interface NodeFilterListInput {
    elemMatch?: Maybe<NodeFilterInput>;
}

export interface PageInfo {
    __typename?: 'PageInfo';
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
}

export interface Query {
    __typename?: 'Query';
    file?: Maybe<File>;
    allFile?: Maybe<FileConnection>;
    sitePage?: Maybe<SitePage>;
    allSitePage?: Maybe<SitePageConnection>;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin?: Maybe<SitePluginConnection>;
    site?: Maybe<Site>;
    allSite?: Maybe<SiteConnection>;
    directory?: Maybe<Directory>;
    allDirectory?: Maybe<DirectoryConnection>;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark?: Maybe<MarkdownRemarkConnection>;
    featuresJson?: Maybe<FeaturesJson>;
    allFeaturesJson?: Maybe<FeaturesJsonConnection>;
}

export interface QueryFileArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
}

export interface QueryAllFileArgs {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export interface QuerySitePageArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    path?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
}

export interface QueryAllSitePageArgs {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export interface QuerySitePluginArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface QueryAllSitePluginArgs {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export interface QuerySiteArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
}

export interface QueryAllSiteArgs {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export interface QueryDirectoryArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
}

export interface QueryAllDirectoryArgs {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export interface QueryMarkdownRemarkArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<WordCountFilterInput>;
}

export interface QueryAllMarkdownRemarkArgs {
    filter?: Maybe<MarkdownRemarkFilterInput>;
    sort?: Maybe<MarkdownRemarkSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export interface QueryFeaturesJsonArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<StringQueryOperatorInput>;
}

export interface QueryAllFeaturesJsonArgs {
    filter?: Maybe<FeaturesJsonFilterInput>;
    sort?: Maybe<FeaturesJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}

export type Site = Node & {
    __typename?: 'Site';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    pathPrefix?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
    buildTime?: Maybe<Scalars['Date']>;
};

export interface SiteBuildTimeArgs {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
}

export interface SiteConnection {
    __typename?: 'SiteConnection';
    totalCount: Scalars['Int'];
    edges: SiteEdge[];
    nodes: Site[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: SiteGroupConnection[];
}

export interface SiteConnectionDistinctArgs {
    field: SiteFieldsEnum;
}

export interface SiteConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
}

export interface SiteEdge {
    __typename?: 'SiteEdge';
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
}

export enum SiteFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    siteMetadata___title = 'siteMetadata___title',
    siteMetadata___description = 'siteMetadata___description',
    siteMetadata___contact___phone = 'siteMetadata___contact___phone',
    siteMetadata___contact___email = 'siteMetadata___contact___email',
    siteMetadata___menuLinks = 'siteMetadata___menuLinks',
    siteMetadata___menuLinks___name = 'siteMetadata___menuLinks___name',
    siteMetadata___menuLinks___link = 'siteMetadata___menuLinks___link',
    siteMetadata___menuLinks___icon = 'siteMetadata___menuLinks___icon',
    port = 'port',
    host = 'host',
    pathPrefix = 'pathPrefix',
    polyfill = 'polyfill',
    buildTime = 'buildTime',
}

export interface SiteFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
}

export interface SiteGroupConnection {
    __typename?: 'SiteGroupConnection';
    totalCount: Scalars['Int'];
    edges: SiteEdge[];
    nodes: Site[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export type SitePage = Node & {
    __typename?: 'SitePage';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    path?: Maybe<Scalars['String']>;
    internalComponentName?: Maybe<Scalars['String']>;
    component?: Maybe<Scalars['String']>;
    componentChunkName?: Maybe<Scalars['String']>;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    context?: Maybe<SitePageContext>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
};

export interface SitePageConnection {
    __typename?: 'SitePageConnection';
    totalCount: Scalars['Int'];
    edges: SitePageEdge[];
    nodes: SitePage[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: SitePageGroupConnection[];
}

export interface SitePageConnectionDistinctArgs {
    field: SitePageFieldsEnum;
}

export interface SitePageConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
}

export interface SitePageContext {
    __typename?: 'SitePageContext';
    id?: Maybe<Scalars['String']>;
}

export interface SitePageContextFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageEdge {
    __typename?: 'SitePageEdge';
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
}

export enum SitePageFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    path = 'path',
    internalComponentName = 'internalComponentName',
    component = 'component',
    componentChunkName = 'componentChunkName',
    isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    context___id = 'context___id',
    pluginCreator___id = 'pluginCreator___id',
    pluginCreator___parent___id = 'pluginCreator___parent___id',
    pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
    pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
    pluginCreator___parent___children = 'pluginCreator___parent___children',
    pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
    pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
    pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
    pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
    pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
    pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
    pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
    pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
    pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
    pluginCreator___children = 'pluginCreator___children',
    pluginCreator___children___id = 'pluginCreator___children___id',
    pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
    pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
    pluginCreator___children___children = 'pluginCreator___children___children',
    pluginCreator___children___children___id = 'pluginCreator___children___children___id',
    pluginCreator___children___children___children = 'pluginCreator___children___children___children',
    pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
    pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
    pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
    pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
    pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
    pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
    pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
    pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
    pluginCreator___internal___content = 'pluginCreator___internal___content',
    pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
    pluginCreator___internal___description = 'pluginCreator___internal___description',
    pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
    pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
    pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
    pluginCreator___internal___owner = 'pluginCreator___internal___owner',
    pluginCreator___internal___type = 'pluginCreator___internal___type',
    pluginCreator___resolve = 'pluginCreator___resolve',
    pluginCreator___name = 'pluginCreator___name',
    pluginCreator___version = 'pluginCreator___version',
    pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
    pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
    pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
    pluginCreator___pluginOptions___includePaths = 'pluginCreator___pluginOptions___includePaths',
    pluginCreator___pluginOptions___components = 'pluginCreator___pluginOptions___components',
    pluginCreator___pluginOptions___constants = 'pluginCreator___pluginOptions___constants',
    pluginCreator___pluginOptions___pages = 'pluginCreator___pluginOptions___pages',
    pluginCreator___pluginOptions___layouts = 'pluginCreator___pluginOptions___layouts',
    pluginCreator___pluginOptions___hooks = 'pluginCreator___pluginOptions___hooks',
    pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
    pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
    pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
    pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
    pluginCreator___pluginOptions___stages = 'pluginCreator___pluginOptions___stages',
    pluginCreator___pluginOptions___options___emitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
    pluginCreator___pluginOptions___options___failOnError = 'pluginCreator___pluginOptions___options___failOnError',
    pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
    pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
    pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
    pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
    pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
    pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
    pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
    pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
    pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
    pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
    pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
    pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
    pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
    pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
    pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
    pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
    pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
    pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
    pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
    pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
    pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
    pluginCreatorId = 'pluginCreatorId',
    componentPath = 'componentPath',
}

export interface SitePageFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    path?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageGroupConnection {
    __typename?: 'SitePageGroupConnection';
    totalCount: Scalars['Int'];
    edges: SitePageEdge[];
    nodes: SitePage[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export interface SitePageSortInput {
    fields?: Maybe<Maybe<SitePageFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

export type SitePlugin = Node & {
    __typename?: 'SitePlugin';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Maybe<Scalars['String']>[]>;
    browserAPIs?: Maybe<Maybe<Scalars['String']>[]>;
    ssrAPIs?: Maybe<Maybe<Scalars['String']>[]>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
};

export interface SitePluginConnection {
    __typename?: 'SitePluginConnection';
    totalCount: Scalars['Int'];
    edges: SitePluginEdge[];
    nodes: SitePlugin[];
    pageInfo: PageInfo;
    distinct: Scalars['String'][];
    group: SitePluginGroupConnection[];
}

export interface SitePluginConnectionDistinctArgs {
    field: SitePluginFieldsEnum;
}

export interface SitePluginConnectionGroupArgs {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
}

export interface SitePluginEdge {
    __typename?: 'SitePluginEdge';
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
}

export enum SitePluginFieldsEnum {
    id = 'id',
    parent___id = 'parent___id',
    parent___parent___id = 'parent___parent___id',
    parent___parent___parent___id = 'parent___parent___parent___id',
    parent___parent___parent___children = 'parent___parent___parent___children',
    parent___parent___children = 'parent___parent___children',
    parent___parent___children___id = 'parent___parent___children___id',
    parent___parent___children___children = 'parent___parent___children___children',
    parent___parent___internal___content = 'parent___parent___internal___content',
    parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
    parent___parent___internal___description = 'parent___parent___internal___description',
    parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
    parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
    parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
    parent___parent___internal___owner = 'parent___parent___internal___owner',
    parent___parent___internal___type = 'parent___parent___internal___type',
    parent___children = 'parent___children',
    parent___children___id = 'parent___children___id',
    parent___children___parent___id = 'parent___children___parent___id',
    parent___children___parent___children = 'parent___children___parent___children',
    parent___children___children = 'parent___children___children',
    parent___children___children___id = 'parent___children___children___id',
    parent___children___children___children = 'parent___children___children___children',
    parent___children___internal___content = 'parent___children___internal___content',
    parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
    parent___children___internal___description = 'parent___children___internal___description',
    parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
    parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
    parent___children___internal___mediaType = 'parent___children___internal___mediaType',
    parent___children___internal___owner = 'parent___children___internal___owner',
    parent___children___internal___type = 'parent___children___internal___type',
    parent___internal___content = 'parent___internal___content',
    parent___internal___contentDigest = 'parent___internal___contentDigest',
    parent___internal___description = 'parent___internal___description',
    parent___internal___fieldOwners = 'parent___internal___fieldOwners',
    parent___internal___ignoreType = 'parent___internal___ignoreType',
    parent___internal___mediaType = 'parent___internal___mediaType',
    parent___internal___owner = 'parent___internal___owner',
    parent___internal___type = 'parent___internal___type',
    children = 'children',
    children___id = 'children___id',
    children___parent___id = 'children___parent___id',
    children___parent___parent___id = 'children___parent___parent___id',
    children___parent___parent___children = 'children___parent___parent___children',
    children___parent___children = 'children___parent___children',
    children___parent___children___id = 'children___parent___children___id',
    children___parent___children___children = 'children___parent___children___children',
    children___parent___internal___content = 'children___parent___internal___content',
    children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
    children___parent___internal___description = 'children___parent___internal___description',
    children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
    children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
    children___parent___internal___mediaType = 'children___parent___internal___mediaType',
    children___parent___internal___owner = 'children___parent___internal___owner',
    children___parent___internal___type = 'children___parent___internal___type',
    children___children = 'children___children',
    children___children___id = 'children___children___id',
    children___children___parent___id = 'children___children___parent___id',
    children___children___parent___children = 'children___children___parent___children',
    children___children___children = 'children___children___children',
    children___children___children___id = 'children___children___children___id',
    children___children___children___children = 'children___children___children___children',
    children___children___internal___content = 'children___children___internal___content',
    children___children___internal___contentDigest = 'children___children___internal___contentDigest',
    children___children___internal___description = 'children___children___internal___description',
    children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
    children___children___internal___ignoreType = 'children___children___internal___ignoreType',
    children___children___internal___mediaType = 'children___children___internal___mediaType',
    children___children___internal___owner = 'children___children___internal___owner',
    children___children___internal___type = 'children___children___internal___type',
    children___internal___content = 'children___internal___content',
    children___internal___contentDigest = 'children___internal___contentDigest',
    children___internal___description = 'children___internal___description',
    children___internal___fieldOwners = 'children___internal___fieldOwners',
    children___internal___ignoreType = 'children___internal___ignoreType',
    children___internal___mediaType = 'children___internal___mediaType',
    children___internal___owner = 'children___internal___owner',
    children___internal___type = 'children___internal___type',
    internal___content = 'internal___content',
    internal___contentDigest = 'internal___contentDigest',
    internal___description = 'internal___description',
    internal___fieldOwners = 'internal___fieldOwners',
    internal___ignoreType = 'internal___ignoreType',
    internal___mediaType = 'internal___mediaType',
    internal___owner = 'internal___owner',
    internal___type = 'internal___type',
    resolve = 'resolve',
    name = 'name',
    version = 'version',
    pluginOptions___isTSX = 'pluginOptions___isTSX',
    pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
    pluginOptions___allExtensions = 'pluginOptions___allExtensions',
    pluginOptions___includePaths = 'pluginOptions___includePaths',
    pluginOptions___components = 'pluginOptions___components',
    pluginOptions___constants = 'pluginOptions___constants',
    pluginOptions___pages = 'pluginOptions___pages',
    pluginOptions___layouts = 'pluginOptions___layouts',
    pluginOptions___hooks = 'pluginOptions___hooks',
    pluginOptions___path = 'pluginOptions___path',
    pluginOptions___name = 'pluginOptions___name',
    pluginOptions___trackingId = 'pluginOptions___trackingId',
    pluginOptions___head = 'pluginOptions___head',
    pluginOptions___stages = 'pluginOptions___stages',
    pluginOptions___options___emitWarning = 'pluginOptions___options___emitWarning',
    pluginOptions___options___failOnError = 'pluginOptions___options___failOnError',
    pluginOptions___pathCheck = 'pluginOptions___pathCheck',
    nodeAPIs = 'nodeAPIs',
    browserAPIs = 'browserAPIs',
    ssrAPIs = 'ssrAPIs',
    pluginFilepath = 'pluginFilepath',
    packageJson___name = 'packageJson___name',
    packageJson___description = 'packageJson___description',
    packageJson___version = 'packageJson___version',
    packageJson___main = 'packageJson___main',
    packageJson___author = 'packageJson___author',
    packageJson___license = 'packageJson___license',
    packageJson___dependencies = 'packageJson___dependencies',
    packageJson___dependencies___name = 'packageJson___dependencies___name',
    packageJson___dependencies___version = 'packageJson___dependencies___version',
    packageJson___devDependencies = 'packageJson___devDependencies',
    packageJson___devDependencies___name = 'packageJson___devDependencies___name',
    packageJson___devDependencies___version = 'packageJson___devDependencies___version',
    packageJson___peerDependencies = 'packageJson___peerDependencies',
    packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
    packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
    packageJson___keywords = 'packageJson___keywords',
}

export interface SitePluginFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface SitePluginGroupConnection {
    __typename?: 'SitePluginGroupConnection';
    totalCount: Scalars['Int'];
    edges: SitePluginEdge[];
    nodes: SitePlugin[];
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJson {
    __typename?: 'SitePluginPackageJson';
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Maybe<SitePluginPackageJsonDependencies>[]>;
    devDependencies?: Maybe<Maybe<SitePluginPackageJsonDevDependencies>[]>;
    peerDependencies?: Maybe<Maybe<SitePluginPackageJsonPeerDependencies>[]>;
    keywords?: Maybe<Maybe<Scalars['String']>[]>;
}

export interface SitePluginPackageJsonDependencies {
    __typename?: 'SitePluginPackageJsonDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJsonDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDevDependencies {
    __typename?: 'SitePluginPackageJsonDevDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}

export interface SitePluginPackageJsonFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependencies {
    __typename?: 'SitePluginPackageJsonPeerDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}

export interface SitePluginPluginOptions {
    __typename?: 'SitePluginPluginOptions';
    isTSX?: Maybe<Scalars['Boolean']>;
    jsxPragma?: Maybe<Scalars['String']>;
    allExtensions?: Maybe<Scalars['Boolean']>;
    includePaths?: Maybe<Maybe<Scalars['String']>[]>;
    components?: Maybe<Scalars['String']>;
    constants?: Maybe<Scalars['String']>;
    pages?: Maybe<Scalars['String']>;
    layouts?: Maybe<Scalars['String']>;
    hooks?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    trackingId?: Maybe<Scalars['String']>;
    head?: Maybe<Scalars['Boolean']>;
    stages?: Maybe<Maybe<Scalars['String']>[]>;
    options?: Maybe<SitePluginPluginOptionsOptions>;
    pathCheck?: Maybe<Scalars['Boolean']>;
}

export interface SitePluginPluginOptionsFilterInput {
    isTSX?: Maybe<BooleanQueryOperatorInput>;
    jsxPragma?: Maybe<StringQueryOperatorInput>;
    allExtensions?: Maybe<BooleanQueryOperatorInput>;
    includePaths?: Maybe<StringQueryOperatorInput>;
    components?: Maybe<StringQueryOperatorInput>;
    constants?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<StringQueryOperatorInput>;
    layouts?: Maybe<StringQueryOperatorInput>;
    hooks?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    trackingId?: Maybe<StringQueryOperatorInput>;
    head?: Maybe<BooleanQueryOperatorInput>;
    stages?: Maybe<StringQueryOperatorInput>;
    options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPluginOptionsOptions {
    __typename?: 'SitePluginPluginOptionsOptions';
    emitWarning?: Maybe<Scalars['Boolean']>;
    failOnError?: Maybe<Scalars['Boolean']>;
}

export interface SitePluginPluginOptionsOptionsFilterInput {
    emitWarning?: Maybe<BooleanQueryOperatorInput>;
    failOnError?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginSortInput {
    fields?: Maybe<Maybe<SitePluginFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

export interface SiteSiteMetadata {
    __typename?: 'SiteSiteMetadata';
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    contact?: Maybe<SiteSiteMetadataContact>;
    menuLinks?: Maybe<Maybe<SiteSiteMetadataMenuLinks>[]>;
}

export interface SiteSiteMetadataContact {
    __typename?: 'SiteSiteMetadataContact';
    phone?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
}

export interface SiteSiteMetadataContactFilterInput {
    phone?: Maybe<StringQueryOperatorInput>;
    email?: Maybe<StringQueryOperatorInput>;
}

export interface SiteSiteMetadataFilterInput {
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    contact?: Maybe<SiteSiteMetadataContactFilterInput>;
    menuLinks?: Maybe<SiteSiteMetadataMenuLinksFilterListInput>;
}

export interface SiteSiteMetadataMenuLinks {
    __typename?: 'SiteSiteMetadataMenuLinks';
    name?: Maybe<Scalars['String']>;
    link?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
}

export interface SiteSiteMetadataMenuLinksFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
}

export interface SiteSiteMetadataMenuLinksFilterListInput {
    elemMatch?: Maybe<SiteSiteMetadataMenuLinksFilterInput>;
}

export interface SiteSortInput {
    fields?: Maybe<Maybe<SiteFieldsEnum>[]>;
    order?: Maybe<Maybe<SortOrderEnum>[]>;
}

export enum SortOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface StringQueryOperatorInput {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Maybe<Scalars['String']>[]>;
    nin?: Maybe<Maybe<Scalars['String']>[]>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
}

export interface WordCount {
    __typename?: 'wordCount';
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
}

export interface WordCountFilterInput {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
}
