package DDGC::Schema::Result::Comment;
# ABSTRACT: Comment result class

use Moo;
extends 'DDGC::Schema::Result';
use DBIx::Class::Candy;
use DDGC::Util::Markup;

table 'comment';

column id => {
    data_type => 'bigint',
    is_auto_increment => 1,
};
primary_key 'id';

column users_id => {
    data_type => 'bigint',
    is_nullable => 1,
};

column content => {
    data_type => 'text',
    is_nullable => 0,
};

column deleted => {
    data_type => 'int',
    default_value => 0,
};

column readonly => {
    data_type => 'int',
    default_value => 0,
};

column is_html => {
    data_type => 'int',
    default_value => 0,
};

column data => {
    data_type => 'text',
    is_nullable => 0,
    serializer_class => 'JSON',
    default_value => '{}',
};

column created => {
    data_type => 'timestamp with time zone',
    set_on_create => 1,
};

column updated => {
    data_type => 'timestamp with time zone',
    set_on_create => 1,
    set_on_update => 1,
};

sub html {
    my ( $self ) = @_;
    my $markup = DDGC::Util::Markup->new;
    return $markup->html( $self->content ) if $self->is_html;
    return $markup->bbcode( $self->content );
}
